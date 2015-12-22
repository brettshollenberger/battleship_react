Rails.application.routes.draw do
  root "games#index"
  
  namespace :api, :defaults => {:format => :json} do
    namespace :v1 do
      resources :join_game_requests
    end
  end
end
