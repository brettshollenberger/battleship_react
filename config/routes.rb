Rails.application.routes.draw do
  root "sessions#create"
  
  get "games", to: "games#index"
  get "messages", to: "messages#index"
end
