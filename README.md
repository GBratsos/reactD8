# Drupal 8 API - ReactJS front end

I set up a ReactJS front-end with a Drupal 8 API (“Headless” Drupal, or decoupled Drupal as some call it).

# How to use
- Create a [Drupal 8](https://www.drupal.org/) installation on your local or remote machine
- Install Devel module and Devel generate and generate some nodes.
- Create a View with the nodes and click on Provide a REST export and give it a link (e.g. /api/articles)
- Test your link (e.g. http://localhost/drupal8/api/articles)
- Edit js/app.js on line [20](https://github.com/GBratsos/reactD8/blob/10e040c0722909fb43250269365cf5aa1ff586cb/js/app.js#L20) and put the link you create.
- Just run your app on your local/remote server. It should list your content and provide you with a search form.
