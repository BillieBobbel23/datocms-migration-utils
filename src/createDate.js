'use strict';

const createDate = async (
  client,
  {
    label = 'Date',
    apiKey = 'date',
    hint = null,
    required = false,
    localized = false,
    dateRange = null,
  },
  modelId
) => {
  if (!client) throw new Error('client cannot be undefined');
  if (!modelId) throw new Error('Model ID cannot be undefined');

  const validators = {};

  if (required) validators.required = {};
  if (dateRange) validators.dateTimeRange = dateRange;

  return client.fields.create(modelId, {
    label,
    apiKey,
    fieldType: 'date',
    validators,
    localized,
    hint,
    appearance: {
      editor: 'date_picker',
      addons: [],
      parameters: {},
    },
  });
};

module.exports = {
  createDate,
};