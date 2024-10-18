import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
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

  constructor(private storageService: StorageService) {}

  async setItem() {
    try {
      await this.storageService.set(this.key, this.value);
      this.output = `Set ${this.key}: ${this.value}`;
    } catch (error) {
      console.error('Error setting item', error);
      this.output = `Error setting item: ${error}`;
    }
  }

  async getItem() {
    try {
      const value = await this.storageService.get(this.key);
      this.output = `Get ${this.key}: ${value}`;
    } catch (error) {
      console.error('Error getting item', error);
      this.output = `Error getting item: ${error}`;
    }
  }

  async removeItem() {
    try {
      const value = await this.storageService.remove(this.key);
      this.output = `Removed ${this.key}`;
    } catch (error) {
      console.error('Error removing item', error);
      this.output = `Error removing item: ${error}`;
    }
  }

  async clearAll() {
    try {
      await this.storageService.clear();;
      this.output = `Cleared all`;
    } catch (error) {
      console.error('Error clearing all items', error);
      this.output = `Error clearing all items: ${error}`;
    }
  }

  async retrieveAllKeys() {
    try {
      const keys = await this.storageService.keys();
      this.output = `Retrieve ${this.key}: ${keys}`;
    } catch (error) {
      console.error('Error retrieving all keys', error);
      this.output = `Error retrieving all keys: ${error}`;
    }
  }

  async getNumberOfItems() {
    try {
      const length = await this.storageService.length();
      this.output = `Get number of items ${this.key}: ${length}`;
    } catch (error) {
      console.error('Error getting number of items', error);
      this.output = `Error getting number of items: ${error}`;
    }
  }

  async iterateOverItems() {
    try {
      await this.storageService.forEach((key, value, index) => {
        console.log(`Item ${index}: ${key} = ${value}`);
      });
      this.output = `Successfully iterated over items`;
    } catch (error) {
      console.error('Error removing item', error);
      this.output = `Error removing item: ${error}`;
    }
  }

}
