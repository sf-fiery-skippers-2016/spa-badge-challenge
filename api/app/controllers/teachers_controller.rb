class TeachersController < ApplicationController

  def show
    teacher = Teacher.find(params[:id])
    @badges = teacher.badges

    render :json => @badges
  end

end
