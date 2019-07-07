Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :routes, except: [:new, :edit]
    resources :locations, except: [:new, :edit]
    resources :workouts, except: [:new, :edit]
  end
  root 'static_pages#root'
end
