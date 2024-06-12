package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;

import com.nguyenthanhnam.exercise03.entity.AttributeValue;

public interface AttributeValueService {
    AttributeValue addAttributeValue(AttributeValue attributeValue);

    AttributeValue getAttributeValueById(UUID attributeValueId);

    List<AttributeValue> getAllAttributeValues();

    AttributeValue updateAttributeValue(UUID attributeValueId, AttributeValue updatedAttributeValue);

    void deleteAttributeValue(UUID attributeValueId);
}
