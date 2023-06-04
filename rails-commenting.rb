# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is the definition of the 'BlogPostsController' class which inherits from the 'ApplicationController'. This controller will handle incoming HTTP requests related to blog posts.
class BlogPostsController < ApplicationController
  def index
    # ---2)In the 'index' action/method, all instances of 'BlogPost' are pulled/fetched from the database(db) and stored in the instance variable '@posts'(in this case is plural). This action usually is used to display all blog posts on an index page.
    @posts = BlogPost.all
  end

  # ---3) The 'show' action/method finds a specific 'BlogPost' based on the id provided in the parameters of the request '(params[:id])' and assigns it to the '@post' instance variable. This is used to show/display a specific blog post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The 'new' action/method creates a new 'BlogPost' instance and assigns it to the '@post' instance variable. It allows the user to input data that will be used to create an instance to the db.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The 'create' action/method attempts to create a new 'BlogPost' instance using the parameters from the 'blog_post_params'. If the post is successfully created and passes validation('.valid?'), the user is redirected to the 'show' view for this blog post.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) The 'edit' action/method fetches/pull a specific 'BlogPost' record based on the 'id' parameter passed in the URL and assigns it to the '@post' instance variable. This '@post' is typically used in the 'edit' view to build a form for editing the blog post.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)The 'update' action fetches a specific 'BlogPost' record and tries to update it with the parameters from the form submission. If the post is sucessfully updated and passes validation, the user is redirected to the 'show' view for this blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)The 'destroy' action fetches a specific 'BlogPost' record and tries to delete it. If it's sucessfully deleted, the user is redirected to the 'index' page, which lists all blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9)The keyword 'private' in Ruby restricts access to methods. The methods defined below this keyword can only be called from within the current object.
  private
  def blog_post_params
    # ---10)The 'blog_post_params' method is a private method that uses Rails's strong parameters feature. This is a security practice to prevent mass assignment vulnerabilities. It permits only the ':title' and ':content' fields from the parameters for creating or updating a 'BlogPost'
    params.require(:blog_post).permit(:title, :content)
  end
end
