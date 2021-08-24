class UsersController < ApplicationController

  def index 
    render component: "Users", props: {users: User.all}
  end

  def new
    render component: "NewUser"
  end




end
