package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nguyenthanhnam.exercise03.entity.Category;
import com.nguyenthanhnam.exercise03.entity.Tag;
import com.nguyenthanhnam.exercise03.entity.Tag;
import com.nguyenthanhnam.exercise03.repository.TagRepository;
import com.nguyenthanhnam.exercise03.service.TagService;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;

    @Override
    public Tag addTag(Tag tag) {
        return tagRepository.save(tag);
    }

     @Override
    public Tag getTagsById(UUID tagId) {
        Optional<Tag> optionalTag = tagRepository.findById(tagId);
        return optionalTag.orElse(null);
    }

    @Override
    public Tag updateTag(UUID tagId, Tag updatedTag) {
        Tag existingTag = tagRepository.findById(tagId).orElse(null);

        if (existingTag != null) {
            existingTag.setName(updatedTag.getName());
            existingTag.setIcon(updatedTag.getIcon());
            
            return tagRepository.save(existingTag);
        }

        return null;
    }

    @Override
    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    @Override
    public void deleteTag(UUID tagId) {
        tagRepository.deleteById(tagId);
    }
}
