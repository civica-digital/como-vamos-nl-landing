activate :directory_indexes
activate :autoprefixer
activate :react
activate :es6

activate :sprockets

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :fonts_dir, "assets/fonts"
#set :layout, "layouts/application"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

page '/paseometropolitano', layout: 'event'

configure :development do
  activate :livereload, :port => '35729', :host => '127.0.0.1'
end

configure :build do
  activate :relative_assets
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end

after_configuration do
  sprockets.append_path File.dirname(::React::Source.bundled_path_for('react.js'))
end
