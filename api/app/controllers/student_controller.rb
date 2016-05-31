class StudentController < ApplicationController
  def index
    @student = Student.all
    render json: @student
  end
end
