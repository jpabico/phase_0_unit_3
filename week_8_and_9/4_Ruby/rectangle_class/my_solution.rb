# U3.W8-9: Implement a Rectangle Class


# I worked on this challenge by myself

# 2. Pseudocode

# define a class Rectangle with two initialized arguments (width, height)
# define initialize instance method that define instance variables @width 
#   and @height
# define instance method area that returns @area of rectangle
# define instance method perimeter that returns @perimeter of rectangle 
# define instance method diagonal that returns @diagonal of rectangle 
# define instance method square? that returns boolean true if rectangle 
#   is a square
# define method defined? that returns boolean true if rectangle method exists


# 3. Initial Solution

# class Rectangle
#   attr_accessor :width, :height

#   def initialize(width, height)
#     @width  = width
#     @height = height
#   end

#   def area
#   	@area = @width * @height
#   end

#   def perimeter
#   	@perimeter = 2 * ( @width + @height)
#   end

#   def diagonal
#   	@diagonal = (@width**2 + @height**2)**0.5
#   end

#   def square?
#   	@width == @height ? true : false
#   end

#   def defined?(name_of_method)
#   	rectangle_methods = [:area, :perimeter, :diagonal, :square?, :defined?]
#   	method_name_symbol = name_of_method.to_sym
#   	rectangle_methods.include?(method_name_symbol)
#   end

#   def ==(other)
#     (other.width  == self.width && other.height == self.height ) ||
#     (other.height == self.width && other.width  == self.height )
#   end
# end


# 4. Refactored Solution

class Rectangle
  attr_accessor :width, :height

  def initialize(width, height)
    @width  = width
    @height = height
  end

  def area
  	@area = @width * @height
  end

  def perimeter
  	@perimeter = 2 * (@width + @height)
  end

  def diagonal
  	@diagonal = (@width**2 + @height**2)**0.5
  end

  def square?
  	@width == @height ? true : false
  end

end


# 1. DRIVER TESTS GO BELOW THIS LINE

test_rect_1 = Rectangle.new(5, 12)
test_rect_2 = Rectangle.new(8, 8)

p Rectangle.instance_methods(false).include?(:area)
p test_rect_1.area == 60
p test_rect_2.area == 64
p Rectangle.instance_methods(false).include?(:perimeter)
p test_rect_1.perimeter == 34
p test_rect_2.perimeter == 32
p Rectangle.instance_methods(false).include?(:diagonal)
p test_rect_1.diagonal == 169**0.5
p test_rect_2.diagonal == 128**0.5
p Rectangle.instance_methods(false).include?(:square?)
p test_rect_1.square? == false
p test_rect_2.square? == true


# 5. Reflection 

# I didn't find this challenge very difficult, but it was harder than I
# thought.  This was because I wasn't aware of the .instance_methods()
# method.  It took me a while to find out how to do this.  I ran into 
# several false leads (many of which I tried by trial and error).  Once 
# I was able to write out that part of the test, the rest of the assignment 
# was fine.  I had forgotten some of my Ruby syntax, but doing this 
# exercise helped me get back into the swing of things.  






