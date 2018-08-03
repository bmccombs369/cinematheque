Rails.application.routes.draw do
  namespace :api do
    resources :lists do
      resources :movies
    end
  end
end
