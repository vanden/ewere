Rails.application.routes.draw do
  
  namespace :api do
    get 'projects/create'
  end

  namespace :api do
    get 'projects/update'
  end

  namespace :api do
    get 'projects/show'
  end

  namespace :api do
    get 'projects/index'
  end

  namespace :api do
    get 'projects/destroy'
  end

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :teams, except: [:new, :edit]
    resources :team_memberships, only: [:create, :show, :destroy]
  end

  root to: "static_pages#root"
end
