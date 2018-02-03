Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :teams, except: [:new, :edit]
  end

  root to: "static_pages#root"
end
