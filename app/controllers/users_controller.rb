class UsersController < ApplicationController

  def index 
    render component: "Users", props: {users: User.all}
  end

  def new
    render component: "NewUser"
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_path
    else
    end
  end

  def show
    user = User.find(params[:id])
    render component: "User", props:{user:user}
  end

  def edit
    user = User.find(params[:id])

    render component: "Edit", props:{user:user}
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      redirect_to users_path
      else
      end

  end

  def destroy 
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path
  end


  private

  def user_params
    params.require(:user).permit(:name, :age)
  end


end
