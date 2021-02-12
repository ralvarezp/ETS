mport { valida } from "../lib/util.js";
import { InfoPasatiempo } from "./InfoPasatiempo.js";
import { InfoPrivilegio } from "./InfoPrivilegio.js";

/** @typedef {Object} ParamUsuario
 * @property {string} email
 * @property {File} avatar
 * @property {string} urlDeAvatar
 * @property {InfoPasatiempo} pasatiempo
 * @property {InfoPrivilegio[]} privilegios */
export class InfoUsuario {
  /** @param {ParamUsuario} param0  */
  constructor({email, avatar, urlDeAvatar, pasatiempo, privilegios}) {
    this.email = email;
    this.avatar = avatar;
    this.urlDeAvatar = urlDeAvatar;
    this.pasatiempo = pasatiempo;
    this.privilegios = privilegios;
  }
  validaAlAgregar() {
    valida(this.email, "Falta proporcionar el email.");
    valida(this.avatar && this.avatar.size > 0,
       "Falta proporcionar el avatar.");
  }
  validaAlModificar() {
    valida(this.email, "Falta proporcionar el email.");
  }
}
