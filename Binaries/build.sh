echo "Joining JavaScript files"
node join.js
echo "Closure compiling"
java -jar closure.jar --compilation_level SIMPLE_OPTIMIZATIONS --language_in ECMASCRIPT_2018 --language_out ES6 --js out.js --js_output_file Phantanizer.min.js
echo "Cleaning temporary files"
rm out.js
echo "Done"