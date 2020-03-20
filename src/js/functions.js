/*
* This file contains functions
* used all around the project
*/


/*
* Transform the name to a validate URL path
*/
export const tranformPath = ( name ) => "/" + name.replace(/\s+/g, '-').toLowerCase();
