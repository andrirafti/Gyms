Rails.application.routes.draw do
  resources :gyms do
    resources :trainers do
      resources :clients
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
