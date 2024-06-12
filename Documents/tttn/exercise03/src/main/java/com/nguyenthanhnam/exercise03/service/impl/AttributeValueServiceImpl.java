package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.AttributeValue;
import com.nguyenthanhnam.exercise03.repository.AttributeValueRepository;
import com.nguyenthanhnam.exercise03.service.AttributeValueService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AttributeValueServiceImpl implements AttributeValueService {

    @Autowired
    private AttributeValueRepository attributeValueRepository;

    @Override
    public AttributeValue addAttributeValue(AttributeValue attributeValue) {
        return attributeValueRepository.save(attributeValue);
    }

    @Override
    public AttributeValue getAttributeValueById(UUID attributeValueId) {
        Optional<AttributeValue> optionalAttributeValue = attributeValueRepository.findById(attributeValueId);
        return optionalAttributeValue.orElse(null);
    }

    @Override
    public List<AttributeValue> getAllAttributeValues() {
        return attributeValueRepository.findAll();
    }

    @Override
    public AttributeValue updateAttributeValue(UUID attributeValueId, AttributeValue updatedAttributeValue) {
        AttributeValue existingAttributeValue = attributeValueRepository.findById(attributeValueId).orElse(null);

        if (existingAttributeValue != null) {
            existingAttributeValue.setAttribute(updatedAttributeValue.getAttribute());
            existingAttributeValue.setAttributeValue(updatedAttributeValue.getAttributeValue());
            existingAttributeValue.setColor(updatedAttributeValue.getColor());
            // You may need to handle variantAttributeValues here
            return attributeValueRepository.save(existingAttributeValue);
        }

        return null;
    }

    @Override
    public void deleteAttributeValue(UUID attributeValueId) {
        attributeValueRepository.deleteById(attributeValueId);
    }
}
