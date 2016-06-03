class StudentController < ApplicationController
  def index
    p params
    @students = Student.all
    render json: @students
  end

  def show
    p params
    student = Student.find(params[:id])
    badge = student.badges
    render json: badge
  end
end
