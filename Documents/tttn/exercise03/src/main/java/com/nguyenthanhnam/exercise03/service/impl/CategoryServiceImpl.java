package com.nguyenthanhnam.exercise03.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nguyenthanhnam.exercise03.entity.Category;
import com.nguyenthanhnam.exercise03.entity.Gallery;
import com.nguyenthanhnam.exercise03.entity.Product;
import com.nguyenthanhnam.exercise03.repository.CategoryRepository;
import com.nguyenthanhnam.exercise03.service.CategoryService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        if (category.getId() != null) {
            category.setId(null);
        }
        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(UUID categoryId) {
        Optional<Category> optionalCategory = categoryRepository.findById(categoryId);
        return optionalCategory.orElse(null);
    }

    @Override
    public List<Category> getAllCategories() {
        // Sort sort = Sort.by(Sort.Direction.ASC, "name");
        return categoryRepository.findAllByOrderByCreatedAtDesc();
    }

    // @Override
    // public List<Category> getRootCategories() {
    //     return categoryRepository.findRootCategories();
    // }

    @Override
    public List<Category> getCategoriesByParentId(UUID parentId) {
        return categoryRepository.findByParentId(parentId);
    }


    @Override
  public Category updateCategory(UUID categoryId, Category updatedCategory) {
    Category existingCategory = categoryRepository.findById(categoryId).orElse(null);

    if (existingCategory != null) {
        // Lưu đường dẫn của hình ảnh cũ
        String oldImagePath = existingCategory.getImagePath();

        // Kiểm tra xem có đường dẫn hình ảnh mới được cung cấp hay không
        String updatedImagePath = updatedCategory.getImagePath();
        if (updatedImagePath != null) {
            existingCategory.setImagePath(updatedImagePath); // Cập nhật đường dẫn hình ảnh mới
        }
        
        existingCategory.setCategoryName(updatedCategory.getCategoryName());
        existingCategory.setParentId(updatedCategory.getParentId());
        existingCategory.setCategoryDescription(updatedCategory.getCategoryDescription());
        existingCategory.setIcon(updatedCategory.getIcon());
        existingCategory.setActive(updatedCategory.getActive());

        // Lưu danh mục đã cập nhật
        Category updatedCategoryResult = categoryRepository.save(existingCategory);
if (updatedImagePath != null && !updatedImagePath.equals(oldImagePath)) {
    deleteImageFile(oldImagePath);
}

        return updatedCategoryResult;
    }

    return null;
}

    // // xóa hình ảnh của category 1h23 18-5
    @Override
    public void deleteCategory(UUID categoryId) {
        Category existingCategory = categoryRepository.findById(categoryId).orElse(null);
        if (existingCategory != null) {
            String imagePath = existingCategory.getImagePath();
            deleteImageFile(imagePath);
            categoryRepository.deleteById(categoryId);
        }
    }


    // xóa hình ảnh của category 1h23 18-5
    @Override
    public void deleteImageFile(String imagePath) {
        if (imagePath != null && !imagePath.isEmpty()) {
            Path imageFilePath = Paths.get(UPLOAD_DIR, imagePath);
            try {
                Files.deleteIfExists(imageFilePath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }


    //
    private final String UPLOAD_DIR = "D:/Study/TTTN/DoAn_TTTN/exercise03/src/main/resources/static/upload/categories/";

    @Override
    public Category saveImage(UUID categoryId, MultipartFile file, int i) {
        try {
            // Lấy tên gốc của tệp tin ảnh
            String originalFileName = file.getOriginalFilename();

            // Tạo một UUID để thêm vào tên tệp tin để đảm bảo tính duy nhất
            String uuid = UUID.randomUUID().toString();

            // Lấy phần mở rộng của tên tệp tin (ví dụ: .jpg, .png)
            String fileExtension = originalFileName.substring(originalFileName.lastIndexOf("."));

            // Tạo tên tệp tin mới bằng cách kết hợp UUID và phần mở rộng của tệp tin gốc
            String newFileName = i + uuid + fileExtension;

            // Tạo đường dẫn tuyệt đối tới thư mục upload
            Path uploadPath = Paths.get(UPLOAD_DIR);

            // Kiểm tra nếu thư mục upload không tồn tại, tạo mới
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            // Tạo đường dẫn đến tệp tin ảnh
            Path filePath = uploadPath.resolve(newFileName);

            // Ghi dữ liệu từ file được upload vào đường dẫn đã tạo
            Files.write(filePath, file.getBytes());

            // Tìm category dựa trên categoryId
            Category category = categoryRepository.findById(categoryId)
                    .orElseThrow(() -> new RuntimeException("Category not found"));
            // Gán giá trị đường dẫn vào trường image của đối tượng Category
            category.setImagePath(newFileName);
            // Lưu lại đối tượng Category đã được cập nhật
            categoryRepository.save(category);

        } catch (IOException e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public List<Category> saveImages(UUID productId, MultipartFile[] files) {
        List<Category> categories = new ArrayList<>();
        int i = 0;
        for (MultipartFile file : files) {
            categories.add(saveImage(productId, file, i));
            i++;
        }
        return categories;
    }

    @Override
    public List<Category> findAllOrderByCreatedAtDesc() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllOrderByCreatedAtDesc'");
    }

    @Override
    public List<Category> getRootCategories() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getRootCategories'");
    }

}
