let entry = process.argv.pop()
console.log('enty', entry)
if (entry && entry.indexOf('.js') === -1) {
  entry = null
}

module.exports = {
  publicPath: '',
  pages: {
    index: {
      // Replace with your .js entry file path. 
      entry: entry || 'forms/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}