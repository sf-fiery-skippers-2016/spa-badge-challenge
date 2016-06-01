class StudentController < ApplicationController
  def index
    @students = Student.all
    render json: @students
  end

  def show
    student = Student.find(params[:id])
    badge = student.badges
    render json: badge
  end
end
