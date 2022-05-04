/*
* This program is the trrangle class.
*
* @author  Abdul Basit
* @version 1.0
* @since   2021-12-25
*/

export class Triangle {
  
    // declared private data member for side lengths
    // of the triangle
    private lengthA: number
    private lengthB: number
    private lengthC: number
    
    constructor (lengthInputA: number, lengthInputB: number, lengthInputC: number) {
        this.lengthA = lengthInputA
        this.lengthB = lengthInputB
        this.lengthC = lengthInputC
        
        let ninetyDegrees: number = 90
        let oneEighty: number= 180

      // variables
      var area: number
      var angleA: number
      var angleB: number
      var angleC: number
      var name: String
      var perimeter: number
      var semiperimeter: number
      var degrees: number
       
        

        degrees = oneEighty / Math.PI

        // The "degrees" changes the result from a radian to a degree
        angleA = degrees * (Math.acos((Math.pow(this.lengthB, 2)
            + Math.pow(this.lengthC, 2) - Math.pow(this.lengthA, 2))
            / (2 * this.lengthB * this.lengthC)))

        angleB = degrees * (Math.acos((Math.pow(this.lengthA, 2)
            + Math.pow(this.lengthC, 2) - Math.pow(this.lengthB, 2))
            / (2 * this.lengthA * this.lengthC)))

        angleC = degrees * (Math.acos((Math.pow(this.lengthA, 2)
            + Math.pow(this.lengthB, 2) - Math.pow(this.lengthC, 2))
            / (2 * this.lengthA * this.lengthB)))
  

  if (angleA < ninetyDegrees && angleB < ninetyDegrees
            && angleC < ninetyDegrees) {
            name = "Acute "
        // If any of the angles are obtuse
        } else if (angleA > ninetyDegrees || angleB > ninetyDegrees
            || angleC > ninetyDegrees ){
            name = "Obtuse "
        // If there is a right angle
        } else {
            name = "Right "
        }

        // If all the angles are equal
        if (angleA == angleB && angleB == angleC) {
            name += "Equilateral"
        // If only two of the angles are equal
        } else if (angleA == angleB || angleB == angleC
            || angleA == angleC ){
            name += "Isosceles"
        // If none of the angles are equal
        } else {
            name += "Scalene"
        }

        perimeter = this.lengthA + this.lengthB + this.lengthC
        semiperimeter = perimeter / 2

        area = Math.sqrt((semiperimeter * (semiperimeter - this.lengthA) * (semiperimeter
            - this.lengthB) * (semiperimeter - this.lengthC)))
    }
}
  
