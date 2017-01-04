import { Component } from '@angular/core';




export class Note{
	id: number;
	name: string;
}
var NOTES: Note[] = [
  { id: 1, name: 'Eat' },
  { id: 2, name: 'JS' },
  { id: 3, name: 'Angular' },
  { id: 4, name: 'Sleep' },
  { id: 5, name: 'Green' }
];



//console.log(NOTES);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bala\'s To Do List';
  count = 5;
  notes= NOTES;
  newAdd: Note = {
  			id: 0,
  			name: ' '
		};
    	

    onCli(note: Note): void {
    	var i:number = note.id;
        NOTES.splice((note.id)-1,1);

    	for(; i < NOTES.length+1 ; i++)
    	{

    		NOTES[i-1].id=i;
    	}
    	this.count--;
  	}
  	onAdd(newn: Note): void{
  		var newNode:Note = {id: this.count+1, name: newn.name};
  		if(newn.name!= " " && newn.name!= " ")
  		{
  		NOTES.splice(this.count,0,newNode);
  		this.count++;
  		}
  	}

}


