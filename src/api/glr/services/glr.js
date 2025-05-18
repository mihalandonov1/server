'use strict';

/**
 * glr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::glr.glr');
