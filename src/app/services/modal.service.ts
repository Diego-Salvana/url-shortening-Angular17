import { Injectable, Signal, computed, signal } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class ModalService {
   private modalSignal = signal(false);
   computedModalSignal: Signal<boolean> = computed(() => this.modalSignal());

   toggleSignal() {
      this.modalSignal.update((value) => !value);
   }
}
