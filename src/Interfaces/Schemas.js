/**
 * // These files show how the data looks.
 * @typedef {Object} Folder
 * @property {string} id - Unique identifier for the folder
 * @property {string} name - Display name of the folder
 * @property {number} createdAt - Timestamp of creation
 */

/**
 * @typedef {Object} Task
 * @property {string} id - Unique identifier for the task
 * @property {string} title - Main title of the task
 * @property {string} description - Detailed description
 * @property {string} folderId - Associated folder's ID
 * @property {boolean} isCompleted - Completion status
 * @property {string} [dueDate] - Optional deadline date string (YYYY-MM-DD or similar)
 * @property {number} createdAt - Timestamp of creation (Used to display HH:MM formatted time)
 * @property {number} updatedAt - Timestamp of last modification
 */

export default {};
