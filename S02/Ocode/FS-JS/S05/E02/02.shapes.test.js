const { expect, getAssociatedFilePath } = require("../../../test");
const FILE_PATH = getAssociatedFilePath(__filename);
const { Shape, Circle, Rectangle, Square } = require(FILE_PATH);


describe("S05E02 - 02.shapes", () => {
  describe("Partie 1", () => {
    describe("constructor", () => {
      it("should instanciate a Shape", () => {
        const shape = new Shape(8, "#F0F");
    
        expect(shape).to.be.an.instanceOf(Shape);
      });    
    });

    describe("color", () => {
      it("should have a getter for color", () => {
        const shape = new Shape(8, "#F0F");
                
        expect(shape.color).to.equal("#F0F");
      });
    
      it("should have a setter for color", () => {
        const shape = new Shape(8, "#F0F");
                
        shape.color = "C4C";
    
        expect(shape.color).to.equal("C4C");
      });
    });

    describe("nbOfEdges", () => {
      it("should have a getter for nbOfEdges", () => {
        const shape = new Shape(8, "#F0F");
    
        expect(shape.nbOfEdges).to.equal(8);
      });
    
    
      it("should have a setter for nbOfEdges", () => {
        const shape = new Shape(8, "#F0F");
                
        shape.nbOfEdges = 10;
    
        expect(shape.nbOfEdges).to.equal(10);
      });
    
      it("should prevent nbOfEdges to be set to a negative number", () => {
        const shape = new Shape(8, "#F0F");
                
        const fn = () => { shape.nbOfEdges = -1; } ;
    
        expect(fn).to.throw(Error, "cannot set a negative number of edges on a shape");
      });            

      it("should still allow nbOfEdges to be set to 0", () => {
        const shape = new Shape(8, "#F0F");
                
        shape.nbOfEdges = 0;
    
        expect(shape.nbOfEdges).to.equal(0);
      });
    });

    describe("toString", () => {
      it("should return the right value", () => {
        const shape = new Shape(8, "#F0F");
                
        const result = shape.toString();
    
        expect(result).to.equal("I am a generic shape");
      });
    });
  });

  describe("Partie 2", () => {
    describe("constructor", () => {
      it("should instanciate a Circle", () => {
        const circle = new Circle(4, "#F0F");
    
        expect(circle).to.be.an.instanceOf(Circle);
      });
    
      it("should instanciate a Shape by inheritance", () => {
        const circle = new Circle(4, "#F0F");
    
        expect(circle).to.be.an.instanceOf(Shape);
      });

      it("should instanciate a Circle with the right properties", () => {
        const circle = new Circle(4, "#F0F");

        expect(circle.radius).to.equal(4);
        expect(circle.color).to.equal("#F0F");
      });

      it("should instanciate a circle with a nbOfShape of 0", () => {
        const circle = new Circle(4, "#F0F");

        expect(circle.nbOfEdges).to.equal(0);
      });
    });

    describe("getArea", () => {
      it("should return the area of the circle", () => {
        const circle = new Circle(4, "#F0F");
                
        const area = circle.getArea();

        expect(area).to.equal(Math.PI * 4 * 4);
      });
    });

    describe("getPerimeter", () => {
      it("should return the perimeter of the circle", () => {
        const circle = new Circle(4, "#F0F");
                
        const perimeter = circle.getPerimeter();

        expect(perimeter).to.equal(2 * Math.PI * 4);
      });
    });

    describe("toString", () => {
      it("should return the right sentence", () => {
        const circle = new Circle(4, "#F0F");
                
        const result = circle.toString();

        expect(result).to.equal("I am a circle of radius 4");
      });
    });
  });

  describe("Partie 3", () => {
    describe("constructor", () => {
      it("should instanciate a Rectangle", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");
    
        expect(rectangle).to.be.an.instanceOf(Rectangle);
      });
    
      it("should instanciate a Shape by inheritance", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");
    
        expect(rectangle).to.be.an.instanceOf(Shape);
      });

      it("should instanciate a Rectangle with the right properties", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");

        expect(rectangle.sideLength1).to.equal(3);
        expect(rectangle.sideLength2).to.equal(5);
        expect(rectangle.color).to.equal("#F0F");
      });

      it("should instanciate a rectangle with a nbOfShape of 4", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");

        expect(rectangle.nbOfEdges).to.equal(4);
      });
    });

    describe("getArea", () => {
      it("should return the area of the rectangle", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");
                
        const area = rectangle.getArea();

        expect(area).to.equal(3 * 5);
      });
    });

    describe("getPerimeter", () => {
      it("should return the perimeter of the rectangle", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");
                
        const perimeter = rectangle.getPerimeter();

        expect(perimeter).to.equal(3 * 2 + 5 * 2);
      });
    });

    describe("toString", () => {
      it("should return the right sentence", () => {
        const rectangle = new Rectangle(3, 5, "#F0F");
                
        const result = rectangle.toString();

        expect(result).to.equal("I am a rectangle of area 15 m^2");
      });
    });
  });

  describe("Partie 4", () => {
    describe("constructor", () => {
      it("should instanciate a Rectangle", () => {
        const square = new Square(10, "#F0F");
    
        expect(square).to.be.an.instanceOf(Square);
      });
    
      it("should instanciate a Rectangle and Shape by inheritance", () => {
        const square = new Square(10, "#F0F");
    
        expect(square).to.be.an.instanceOf(Rectangle);
        expect(square).to.be.an.instanceOf(Shape);
      });

      it("should instanciate a Square with the right properties", () => {
        const square = new Square(10, "#F0F");

        expect(square.sideLength).to.equal(10);
        expect(square.color).to.equal("#F0F");
      });

      it("should instanciate a square with a nbOfShape of 4", () => {
        const square = new Square(10, "#F0F");

        expect(square.nbOfEdges).to.equal(4);
      });
    });

    describe("getArea", () => {
      it("should return the area of the square", () => {
        const square = new Square(10, "#F0F");
                
        const area = square.getArea();

        expect(area).to.equal(10 * 10);
      });
    });

    describe("getPerimeter", () => {
      it("should return the perimeter of the square", () => {
        const square = new Square(10, "#F0F");
                
        const perimeter = square.getPerimeter();

        expect(perimeter).to.equal(10 * 4);
      });
    });

    describe("toString", () => {
      it("should return the right sentence", () => {
        const square = new Square(10, "#F0F");
                
        const result = square.toString();

        expect(result).to.equal("I am a square of side 10");
      });
    });
  });
});
