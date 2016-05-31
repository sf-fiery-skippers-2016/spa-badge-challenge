Rails.application.routes.draw do
  resources :teachers, only: [:index, :show] do
    resources :badges, only: [:create] do
      resources :votes, only: [:create]
    end
  end
end
