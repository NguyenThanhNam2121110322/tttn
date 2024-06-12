package com.nguyenthanhnam.exercise03.service;

import java.util.List;
import java.util.UUID;


import com.nguyenthanhnam.exercise03.entity.Tag;

public interface TagService {
    Tag addTag(Tag tag);
    Tag getTagsById(UUID tagId);
    List<Tag> getAllTags(); 
    Tag updateTag(UUID tagId, Tag updatedTag);
    void deleteTag(UUID tagId);
}
