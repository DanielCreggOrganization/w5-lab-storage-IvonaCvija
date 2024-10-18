import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class HomePage {
  key: string = '';
  value: string = '';
  output: string = '';

  constructor(private storage: Storage) {
    storage.create();
  }

  async setItem() {
    try {
      await this.storage.set(this.key, this.value);
      this.output = `Set ${this.key}: ${this.value}`;
    } catch (error) {
      console.error('Error setting item', error);
      this.output = `Error setting item: ${error}`;
    }
  }

  async getItem() {
    try {
      const value = await this.storage.get(this.key);
      this.output = `Get ${this.key}: ${value}`;
    } catch (error) {
      console.error('Error getting item', error);
      this.output = `Error getting item: ${error}`;
    }
  }

  async removeItem(){
    try {
      const value = await this.storage.remove(this.key);
      this.output = `Remove ${this.key}: ${value}`;
    } catch (error) {
      console.error('Error removing item', error);
      this.output = `Error removing item: ${error}`;
    }
  }

  async clearAll(){
    try {
      const value = await this.storage.clear();;
      this.output = `Clear all ${this.key}: ${value}`;
    } catch (error) {
      console.error('Error clearing all items', error);
      this.output = `Error clearing all items: ${error}`;
    }
  }

  async retrieveAllKeys(){
    try {
      const keys = await this.storage.keys();
      this.output = `Retrieve ${this.key}: ${keys}`;
    } catch (error) {
      console.error('Error retrieving all keys', error);
      this.output = `Error retrieving all keys: ${error}`;
    }
  }

  async getNumberOfItems(){
    try {
      const length = await this.storage.length();
      this.output = `Remove ${this.key}: ${length}`;
    } catch (error) {
      console.error('Error getting number of items', error);
      this.output = `Error getting number of items: ${error}`;
    }
  }
}
