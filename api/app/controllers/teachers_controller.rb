class TeachersController < ApplicationController
  before_action :set_teacher, only: [:show]


  def index
    @teachers = Teacher.all

    respond_to do |format|
      format.json {render :json => response_hash}
    end
  end

  def show
    @badges = @teacher.badges

    respond_to do |format|
      format.json {render :json => response_hash}
    end
  end

  private
    def set_teacher
      @teacher = Teacher.find(params[:id])
    end


end
