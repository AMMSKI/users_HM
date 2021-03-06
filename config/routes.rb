Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
  
  get '/users', to: "users#index"
  get '/users/new', to: "users#new"
  get '/users/:id', to: "users#show"
  get '/users/:id/edit', to: "users#edit"

  post '/users', to: "users#create"
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'




end
