class BadgesController < ApplicationController

  before_action :set_teacher, only: [:create]

  def create
    if badge_params[:body] == ""
      respond_to do |format|
        format.json { render 'nothing' }
      end
    else
      new_badge = @teacher.badges.create(badge_params)
      respond_to do |format|
        format.json {render json: new_badge}
      end
    end
  end

  private
    def badge_params
      params.require(:badge).permit(:body)
    end

    def set_teacher
      @teacher =  Teacher.find(params[:teacher_id])
    end
end
