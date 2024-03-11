package com.indeed.server.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
@Data
@Document(collection="posts")
public class PostModel {
    private String profile;
    private String type;
    private String description;
    private String experience;
    private String technology[];
    private String salary;
    private Date createdAt;
}
