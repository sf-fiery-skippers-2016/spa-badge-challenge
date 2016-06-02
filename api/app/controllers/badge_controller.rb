class BadgeController < ApplicationController
  def create
    badge = Badge.find(1)
    p params
    render json: badge
  end
end
