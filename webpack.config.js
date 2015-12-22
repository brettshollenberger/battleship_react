var path      = require("path"),
    root_path = path.resolve(__dirname),
    js_root   = path.join(root_path, "client"),
    dist_root = path.join(root_path, "app/assets/javascripts/dist");

module.exports = {
  context: js_root,
  resolve: {
    root: js_root,
    moduleDirectories: [js_root, path.join(root_path, "node_modules"), "web_modules"]
  },
  entry: [path.join(js_root, "index.jsx")],
  output: {
    path: dist_root,
    filename: "bundled.js"
  },
  module: {
            loaders: [
            { 
              test: /\.jsx?$/, 
              loader: "babel",
              exclude: /node_modules/
            }
            ]
          }
}


