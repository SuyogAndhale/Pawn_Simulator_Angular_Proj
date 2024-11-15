import { Component } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css'],
})
export class SimulatorComponent {
  board: number[][] = Array.from({ length: 8 }, (_, i) =>
    Array.from({ length: 8 }, (_, j) => 0)
  );
  x: number = 0;
  y: number = 0;
  direction: string = 'NORTH';
  color: string = 'White';
  isPawnPlaced: boolean = false;
  directions: string[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  directionAngles = { NORTH: 0, EAST: 90, SOUTH: 180, WEST: 270 };
  pawn = {
    x: -1,
    y: -1,
    direction: this.directionAngles['NORTH'],
    facing: 'NORTH',
  };

  status: string = 'PLACE 0,0,NORTH,WHITE';

  placePawn() {
    this.pawn = {
      x: 3,
      y: 0,
      direction: this.directionAngles['NORTH'],
      facing: 'NORTH',
    };
    this.isPawnPlaced = true;
  }

  rotateLeft() {
    const currentIndex = this.directions.indexOf(this.pawn.facing);
    this.pawn.facing = this.directions[(currentIndex + 3) % 4];
    this.pawn.direction =
      this.directionAngles[
        this.pawn.facing as 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'
      ];
  }

  rotateRight() {
    const currentIndex = this.directions.indexOf(this.pawn.facing);
    this.pawn.facing = this.directions[(currentIndex + 1) % 4];
    this.pawn.direction =
      this.directionAngles[
        this.pawn.facing as 'NORTH' | 'EAST' | 'SOUTH' | 'WEST'
      ];
  }

  movePawn() {
    switch (this.pawn.facing) {
      case 'NORTH':
        if (this.pawn.x > 0) this.pawn.x--;
        break;
      case 'SOUTH':
        if (this.pawn.x < 7) this.pawn.x++;
        break;
      case 'EAST':
        if (this.pawn.y < 7) this.pawn.y++;
        break;
      case 'WEST':
        if (this.pawn.y > 0) this.pawn.y--;
        break;
    }
  }

  reportPosition() {
    this.status = `PLACE ${this.pawn.x},${this.pawn.y},${this.pawn.facing},WHITE`;
  }
}
