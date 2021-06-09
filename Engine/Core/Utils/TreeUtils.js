"use strict"

function Tree(value) {
	this.value = (value !== undefined) ? value : null
	this.uuid = Math.ceil(Math.random() * 65536)
	this.parent = null
	this.children = []
}

// Add element to tree
Tree.prototype.add = function(tree) {
	if (tree instanceof Tree) {
		this.children.push(tree)
		this.parent = this
		return tree
	} else {
		var tree = new Tree(tree)
		tree.parent = this
		this.children.push(tree)
		return tree
	}
}

// Remove element from tree
Tree.prototype.remove = function(tree) {
	var uuid = (typeof tree === "number") ? tree : tree.uuid

	for(var i = 0; i < this.children.length; i++) {
		if (this.children[i].uuid === uuid) {
			this.children.splice(i, 1)
			return
		}
	}
}

// Clone tree
Tree.prototype.clone = function(tree) {
	var tree = new Tree()
	tree.uuid = this.uuid
	tree.value = this.value

	for(var i = 0; i < this.children.length; i++) {
		tree.add(this.children[i].clone())
	}

	return tree
}

// Print tree
Tree.prototype.print = function(level) {
	if (level === undefined) {
		level = 1
	}

	var space = ""
	for(var i = level - 1; i > 0; i--) {
		space += "----"
	}
	space += "--->"

	for(var i = 0; i < this.children.length; i++) {
		console.log(space + this.children[i].value + "(" + this.children[i].uuid + ")")
		this.children[i].print(level + 1)
	}
}

function TreeUtils() {}

// Tree changes mode
TreeUtils.DIFF_ADDED = 0
TreeUtils.DIFF_REMOVED = 1
TreeUtils.DIFF_MOVED = 2

// Compare two trees and return list of changes
TreeUtils.compare = function(a, b, diffs, path_a, path_b) {
	// Differences array
	if(diffs === undefined) {
		diffs = []
	}

	// Path to this tree point in positions
	if(path_a === undefined) {
		path_a = []
	}

	if (path_b === undefined) {
		path_b = []
	}

	var i = 0, j = 0
	while(i < a.children.length && j < b.children.length) {
		if(a.children[i].uuid !== b.children[j].uuid) {
			// Element missing (moved of deleted)
			if(a.children[i + 1].uuid === b.children[j].uuid) {
				var from = path_a.slice(0)
				from.push(i)

				diffs.push({status: TreeUtils.DIFF_REMOVED, uuid: a.children[i].uuid, from: from, to: null})
				i++
			}
			// Added element
			else if(a.children[i].uuid === b.children[j + 1].uuid) {
				var to = path_b.slice(0)
				to.push(j)

				diffs.push({status: TreeUtils.DIFF_ADDED, uuid: b.children[j].uuid, from: null, to: to})
				j++
			}
		}
		else {
			var from = path_a.slice(0)
			from.push(i)
			var to = path_b.slice(0)
			to.push(j)

			TreeUtils.compare(a.children[i], b.children[j], diffs, from to)
		}

		i++
		j++
	}

	// Remaining elements missing in a
	while(i < a.children.length) {
		var from = path_a.slice(0)
		from.push(i)

		diffs.push({status: TreeUtils.DIFF_REMOVED, uuid: a.children[i].uuid, from: from, to: null})
		i++
	}

	// Extra elements added in b
	while(j < b.children.length) {
		var to = path_b.slice(0)
		to.push(j)

		diffs.push({status: TreeUtils.DIFF_ADDED, uuid: b.children[j].uuid, from: null, to: to})
		j++
	}

	// Check if some elements have removed and added status at same time
	for(var i = 0; i < diffs.length; i++) {
		for(var j = 0; j < diffs.length; j++) {
			if(diffs[i].uuid === diffs[j].uuid) {
				if(diffs[i].status === TreeUtils.DIFF_REMOVED && diffs[j].status === TreeUtils.DIFF_ADDED) {
					diffs[i].status = TreeUtils.DIFF_MOVED
					diffs[i].to = diffs[j].to
					diffs.splice(j, 1)
				} else if(diffs[j].status === TreeUtils.DIFF_REMOVED && diffs[i].status === TreeUtils.DIFF_ADDED) {
					diffs[i].status = TreeUtils.DIFF_MOVED
					diffs[i].from = diffs[j].to
					diffs.splice(j, 1)
				}

			}
		}
	}

	return diffs
}