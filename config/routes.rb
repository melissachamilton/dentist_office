Rails.application.routes.draw do

  namespace :api do
    resources :users do
      resources :appointments do
      resources :results
      end
end
  end
  
  namespace :api do
    resources :appointments do
      resources :providers 

  end
end

namespace :api do
  resources :users do
    resources :billing
  end
end

end