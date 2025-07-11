// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from 'electron'

// Безопасный мост между главным процессом и рендерером
contextBridge.exposeInMainWorld('electronAPI', {
  // Здесь будут наши API методы
})