"use strict"

// Stores program changes history
function History() {
    // Actions list and history size limit
	this.actions = []
	this.size = 20
    
    // Current state
    this.state = 0
}

// Add change to program history
History.prototype.push = function(object, type, parent) {
	this.actions.push(new Action(object, type, parent, this.state))
    this.state++

	if (this.actions.length > this.size) {
		this.actions.pop()
	}
}

// Get Last change from history
History.prototype.pop = function() {
	return this.actions.pop()
}

// Revert last action (returns action applied on success)
History.prototype.undo = function() {
    var action = this.actions.pop()

    if(action !== undefined) {
        if(action.type === Action.CHANGED) {
            var children = action.parent.children
            for(var i = 0; i < children.length; i++) {
                if(children[i].uuid === action.object.uuid) {
                    action.object.parent = children[i].parent
                    action.object.children = children[i].children
                    children[i] = action.object
                }
            }
        } else if(action.type === Action.REMOVED) {
            action.parent.add(action.object)
        } else if(action.type === Action.ADDED) {
            action.object.destroy()
        }

        return action
    }

    return null
}

// Redo last reverted action (returns type of action applied)
History.prototype.redo = function() {
    // TODO: This
    return null
}
