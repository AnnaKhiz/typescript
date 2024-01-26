// Вам необхідно написати додаток Todo list. 
// У списку нотаток повинні бути методи для додавання нового запису, видалення, 
// редагування та отримання повної інформації про нотаток за ідентифікатором, а так само отримання списку всіх нотатoк. 
// Крім цього, у користувача має бути можливість позначити нотаток, як виконаний, і отримання інформації про те, 
// скільки всього нотаток у списку і скільки залишилося невиконаними. 
// Нотатки не повинні бути порожніми. 

// Кожний нотаток має назву, зміст, дату створення і редагування та статус. Нотатки бувають двох типів. 
// Дефолтні та такі, які вимагають підтвердження при ридагуванні (окремі класи). +

// Окремо необхідно розширити поведінку списку та додати можливість пошуку нотатка по будь-якому 
// філду, або у якості опції вказувати по якому саме вести пошук.

// Також окремо необхідно розширити список можливістю сортування нотаток за статусом або часом створення.

enum NoteTypesEnum {
	DEFAULT = 'default',
	CONFIRM = 'confirm'
}

interface INote {
	id: number;
	title: string;
	body: string;
	dateCreate: number;
	dateEdit: number;
	isFinished: boolean;
	finishNote(id: number): void;
	editNote(note: INote): void;
}

class TodoList {
	protected todoList: Array<Note | NoteConfirm> = [];

	public get allTodoListNotes(): (Note | NoteConfirm)[] {
		return this.todoList
	}

	protected checkAllNotFinishedNotes(): void {
		this.todoList.filter(note => note.isFinished === false)
	}

	protected countAllNotes(): number {
		return this.todoList.length
	}

	public finishNote(id: number): void {
		const note = this.todoList.find(element => element.id === id);
		if (!note) throw new Error('Incorrect ID');

		note.finishNote()
	}

	public getNoteInfo(id: number): void {
		this.todoList.filter(note => note.id === id)
	}

	public addNote(note: Note | NoteConfirm): void {
		this.todoList.push(note)
	}

	public deleteNote(id: number): void {
		this.todoList.filter(element => element.id !== id)
	}

	public editNote(id: number, payload: Note): void {
		const note = this.todoList.find(element => element.id === id);

		if (!note) throw new Error('Incorrect ID');

		note.editNote(payload);
	};

	public findTodoNote(field: string, value: string | number | boolean): Note | NoteConfirm {
		const note = this.todoList.find(element => element[field] === value);

		if (!note) throw new Error('Incorrect ID');

		return note
	}

	public sortTodoList(status: string): void {
		this.todoList.sort((a, b) => String(a[status]).localeCompare(String(b[status])))
	}

}

class Note implements INote {
	public isFinished = false;

	constructor(
		public readonly id: number,
		public title: string,
		public body: string,
		public readonly dateCreate: number,
		public dateEdit: number,
		public type: NoteTypesEnum.DEFAULT
	) { }

	public editNote(note: Note): void {
		Object.assign(this, note);
	}

	public finishNote(): void {
		this.isFinished = true;
	}
}

class NoteConfirm implements INote {
	public isFinished = false;

	constructor(
		public readonly id: number,
		public title: string,
		public body: string,
		public readonly dateCreate: number,
		public dateEdit: number,
		public type: NoteTypesEnum.CONFIRM
	) { }

	public editNote(note: INote): void {
		if (this.isFinished) return;
		Object.assign(this, note);
	}

	public finishNote(): void {
		this.isFinished = true;
	}

	public confirm(value: boolean): void {
		this.isFinished = value
	}
}
