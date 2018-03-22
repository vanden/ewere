Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :teams, except: [:new, :edit]
    resources :team_memberships, only: [:create, :show, :destroy]
    resources :projects, except: [:new, :edit]
    resources :tasks, except: [:new, :edit]
  end

  root to: "static_pages#root"
end
