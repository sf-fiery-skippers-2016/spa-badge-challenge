class VotesController < ApplicationController
  before_action :set_badge, only: [:create]

  def create
    check_if_badge_is_initialized
    create_a_vote_on(@badge)
    response_hash = {
      badge_id: @badge.id,
      vote_total: @badge.votes.inject(0){|sum, vote| sum + vote}
    }
    respond_to do |format|
      format.json {render :json => response_hash}
    end

  end

  private
    def set_badge
      @badge = Badge.find(params[:badge_id])
    end

    def vote_params
      params.require(:vote).permit(:value)
    end

    def check_if_badge_is_initialized
      if session[:badge_id] == nil
        session[:badge_id] = []
      end
    end

    def create_a_vote_on(badge)
      unless session[:badge_id].include? badge.id
        badge.votes.create(vote_params[:value])
        session[:badge_id] << badge.id
      end
    end
end
