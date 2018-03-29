Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create, :destroy]
    resources :team_memberships, only: [:create, :show, :destroy]

    # FixMe except should also have :index; left as is until migration
    # to nested routes is complete.
    resources :tasks, except: [:new, :edit]

    resources :teams do
      resources :projects, only: [:index]
      resources :tasks, only: [:index]
    end

    # FixMe except should also have :index; left as is until migration
    # to nested routes is complete.
    resources :projects, except: [:new, :edit] do
      resources :tasks, only: [:index]
    end

    resources :users, only: [:create, :update, :destroy, :show] do
      resources :tasks, only: [:index]
    end
  end

  root to: "static_pages#root"
end
