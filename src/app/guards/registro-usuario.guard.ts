import { CanDeactivateFn } from '@angular/router';
import { RegistroUsuarioComponent } from '../pages/registro-usuario/registro-usuario.component';

export const registroUsuarioGuard: CanDeactivateFn<RegistroUsuarioComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.campoSinllenar()) {
    return confirm(
      'Tienes datos sin llenar, ¿Seguro quieres abandondar este registro?'
    );
  }
  return true;
};
