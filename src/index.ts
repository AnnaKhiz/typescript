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
}

interface IEditNote {
	type: NoteTypesEnum;
}

abstract class TodoList {
	public todoList: INote[];
	public title: string;
	public body: string;

	protected readonly id: number;
	protected readonly dateCreate: number;
	protected dateEdit: number;
	protected isFinished: boolean;

	constructor(note: INote) {
		this.todoList = [note];
		this.id = note.id;
		this.title = note.title;
		this.body = note.body;
		this.dateCreate = +Date.now();
		this.dateEdit = note.dateEdit;
		this.isFinished = note.isFinished;
	}

	public get allTodoListNotes(): INote[] {
		return this.todoList
	}

	protected checkAllNotFinishedNotes(): INote[] {
		return this.todoList.filter(note => note.isFinished === false)
	}

	protected countAllNotes(): number {
		return this.todoList.length
	}

	public finishNote(id: number) {
		this.todoList.filter(note => note.id === id && note.isFinished === false ? note.isFinished = true : note.isFinished);
		this.countAllNotes();
		this.checkAllNotFinishedNotes();
	}

	public getNoteInfo(id: number): INote[] {
		return this.todoList.filter(note => note.id === id)
	}

	public addNote(note: INote): void {
		this.todoList.push(note)
	}

	public deleteNote(id: number): INote[] {
		return this.todoList.filter(element => element.id !== id)
	}

	public abstract editNote(note: INote): void;
}


class TodoListDefault extends TodoList implements IEditNote {
	public readonly type: NoteTypesEnum;

	constructor(note: INote, type: NoteTypesEnum.DEFAULT) {
		super(note)
		this.type = type;
	}

	public editNote(note: INote): any[] {
		return this.todoList.map(element => {
			if (element.id === note.id) {
				element.title = note.title;
				element.body = note.body;
				element.dateEdit = note.dateEdit;
				element.isFinished = note.isFinished;
			}
		});
	}
}

class TodoListConfirm extends TodoList implements IEditNote {
	public readonly type: NoteTypesEnum.CONFIRM;

	constructor(note: INote, type: NoteTypesEnum.CONFIRM) {
		super(note)
		this.type = type;
	}

	public editNote(note: INote): any[] | never {
		const result = confirm(`Confirm editing note`)
		if (result) {
			return this.todoList.map(element => {
				if (element.id === note.id) {
					element.title = note.title;
					element.body = note.body;
					element.dateEdit = note.dateEdit;
					element.isFinished = note.isFinished;
				}
			})
		} else {
			throw new Error('You didnt confirm editing')
		}
	}
}

class FindTodoNote extends TodoList {
	public editNote(note: INote): void {
		throw new Error('This class doesnt support editing')
	}

	public findTodoNote(field: string, value: string | number | boolean): INote[] {
		return this.todoList.filter(todo => todo[field] === value)
	}
}

class SortTodoNote extends TodoList {
	public editNote(note: INote): void {
		throw new Error('This class doesnt support editing')
	}

	public sortTodoNote(status: string): INote[] {
		return this.todoList.sort((a, b) => String(a[status]).localeCompare(String(b[status])))
	}
}
