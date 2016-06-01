Rails.application.routes.draw do


  resources :teachers

  resources :badges do
    resources :votes
  end


end
